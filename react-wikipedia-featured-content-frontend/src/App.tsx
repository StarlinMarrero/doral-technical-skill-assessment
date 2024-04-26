import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import dateFeedFilter from "./helpers/dateFeedFilter.helper";
import { useGetFeedQuery } from "./redux/rtk-query/feed";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RootLayout from "./components/Layouts/RootLayout";
import Tab from "./components/Tab/Tab";
import Modal from "./components/Modal/Modal";
import { EnumLanguage, Tfa, TypeLanguage } from "./redux/rtk-query/feed/feed.interfaces";
import DetailsArticleModal from "./components/pages/home/DetailsArticleModal";
import localStorageHelper from "./helpers/localStorage.helper";
import Spinner from "./components/Spinner/Spinner";
import Dropdown from "./components/Dropdown/Dropdown";
import SkeletonCard from "./components/Skeleton/Skeleton";
import { useForm } from "./hooks/useForm";

function App() {
    const dateYesterday = new Date();
    const { form, onChange } = useForm({
        date: dateYesterday,
        lang: "en",
    });
    // const [selectedDate, setSelectedDate] = useState(dateYesterday);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);
    const [detailsToShowArticle, setDetailsToShowArticle] = useState<Partial<Tfa>>({});
    const [languageSelected, setLanguageSelected] = useState<TypeLanguage>("en");

    const [listSeenTfa, setListSeenTfa] = useState(localStorageHelper.getItem("feed-seen-list") || []);

    const {
        data: dataFeeds,
        isFetching,
        refetch,
    } = useGetFeedQuery({
        date: dateFeedFilter(form.date),
        lang: languageSelected,
    });

    const [mostReadArticles, setMostReadArticles] = useState(dataFeeds?.mostread?.articles || []);

    const loader = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const { scrollTop, clientHeight, scrollHeight } = e.currentTarget as HTMLElement;
            const scrollTopDown = scrollTop + clientHeight;
            if (scrollTopDown >= scrollHeight - 5) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        const currentLoader = loader.current;
        if (currentLoader) {
            currentLoader.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (currentLoader) {
                currentLoader.removeEventListener("scroll", handleScroll);
            }
        };
    }, [loader.current, dataFeeds]);

    const handleDateChange = (date: Date, event: React.SyntheticEvent<any, Event> | undefined) => {
        setPage(1);
        onChange(date, "date");
    };

    const handleDetails = (feed: Tfa) => {
        setIsOpenModalDetails(!isOpenModalDetails);
        setDetailsToShowArticle(feed);
        setListSeenTfa([...listSeenTfa, feed]);
    };

    useEffect(() => {
        localStorageHelper.setItem("feed-seen-list", listSeenTfa);
    }, [listSeenTfa]);

    useEffect(() => {
        if (dataFeeds?.mostread?.articles) {
            const newData = dataFeeds?.mostread?.articles?.slice(0, page * pageSize);
            setMostReadArticles(newData || []);
        }
    }, [page, dataFeeds]);

    return (
        <>
            <RootLayout>
                <div className="mb-3">
                    <Card className="w-full h-full p-6 bg-base-100 text-center">
                        <div>
                            <h3 className="text-2xl font-bold">Welcome to Wikipedia Feeds</h3>
                            <p className="text-sm">Wikipedia Feeds is a web application that allows you to see the most read articles and the events that happened on this day in history.</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="mt-2">
                                <span className="mr-2">
                                    <i className="fas fa-calendar-alt"></i>
                                </span>
                                <DatePicker className="input input-bordered w-full max-w-xs" selected={form.date} onChange={handleDateChange} />
                            </div>
                            <div className="col-span-1">
                                <span className="mr-2"></span>
                                <Dropdown
                                    title={
                                        <>
                                            <i className="fas fa-language"></i>
                                            Language -{Object.entries(EnumLanguage).find((item) => item[1] === languageSelected)?.[0] || "en"}
                                        </>
                                    }
                                    items={[
                                        Object.entries(EnumLanguage).map((item) => {
                                            const key = item[0];
                                            const value = item[1];
                                            return (
                                                <a
                                                    key={key}
                                                    href="#"
                                                    className="dropdown-item"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setLanguageSelected(value);
                                                    }}>
                                                    {key}
                                                </a>
                                            );
                                        }),
                                    ]}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
                <Tab
                    xs={{
                        style: {
                            overflow: "auto",
                            maxHeight: "calc(100vh - 300px)",
                        },
                        ref: loader,
                    }}
                    handleTabChangeCallback={() => {
                        setPage(1);
                    }}
                    contentClassName={"overscroll-auto gab-4 h-full"}
                    tabs={[
                        {
                            title: "Most Read",
                            content: (
                                <>
                                    {isFetching ? (
                                        <div
                                            className="grid lg:grid-cols-3 mt-2 md:grid-cols-2 grid-cols-1 gap-10 xl:grid-cols-4
                                        2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7 5xl:grid-cols-8 6xl:grid-cols-9 7xl:grid-cols-10 8xl:grid-cols-11 9xl:grid-cols-12">
                                            <SkeletonCard className="flex flex-col gap-4 w-full h-full p-6 mt-6" multiple={5} />
                                        </div>
                                    ) : (
                                        <>
                                            <div
                                                className="
                                        grid lg:grid-cols-3 mt-2 md:grid-cols-2 grid-cols-1 gap-4 xl:grid-cols-4
                                            2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7 5xl:grid-cols-8 6xl:grid-cols-9 7xl:grid-cols-10 8xl:grid-cols-11 9xl:grid-cols-12">
                                                {mostReadArticles.length === 0 && (
                                                    <div className="w-full h-full p-6 bg-base-100 shadow-xl mt-6">
                                                        <h5 className="text-center">No data found</h5>
                                                    </div>
                                                )}
                                                {mostReadArticles?.map((feed, index) => (
                                                    <div key={index}>
                                                        <Card
                                                            // className="w-full h-full p-6 bg-base-100 shadow-xl mt-6"
                                                            //make diferent the card when is seen
                                                            className={`w-full h-full p-6 bg-base-100 shadow-xl mt-6 ${listSeenTfa.find((seen) => seen.title === feed.title) ? "bg-base-300 opacity-50" : ""}`}
                                                            imgSrc={feed.thumbnail?.source}
                                                            imgStyle={{
                                                                height: "100px",
                                                                objectFit: "cover",
                                                                opacity: 0.8,
                                                            }}
                                                            style={{
                                                                width: "18rem",
                                                                margin: "0 auto",
                                                            }}
                                                            footer={
                                                                <>
                                                                    <Button styleType="btn-info" className="btn btn-sm btn-info" onClick={() => handleDetails(feed)}>
                                                                        Details
                                                                    </Button>
                                                                </>
                                                            }>
                                                            <h5 className="card-title">{feed.normalizedtitle}</h5>
                                                            <p className="line-clamp-2">{feed.description}</p>
                                                        </Card>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </>
                            ),
                        },
                    ]}></Tab>

                <Modal
                    isOpen={isOpenModalDetails}
                    onClose={() => {
                        setIsOpenModalDetails(!isOpenModalDetails);
                        setDetailsToShowArticle({});
                    }}>
                    <DetailsArticleModal data={detailsToShowArticle} />
                </Modal>
            </RootLayout>
        </>
    );
}

export default App;
