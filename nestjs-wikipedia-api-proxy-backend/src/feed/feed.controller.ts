import { Controller, Get, HttpException, HttpStatus, Param, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { FeedTranslateDto } from "./dto/feedTranslate.dto";
import { GetFeedDto } from "./dto/getFeed.dto";
import { FeedService } from "./feed.service";
import { LogService } from "src/log/log.service";
import { ApiBody, ApiParam } from "@nestjs/swagger";

@Controller("/feed")
export class FeedController {
    constructor(
        private readonly feedService: FeedService,
        private readonly logService: LogService,
    ) {}
    @Get()
    @UsePipes(new ValidationPipe())
    async getSummary(@Query() query: GetFeedDto) {
        const { data, error } = await this.feedService.getFeeds(query.lang, query.date);

        if (error) {
            this.logService.create("error", JSON.stringify(error));
            return new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return data;
    }
    @Get("/translate/:language/featured/:year/:month/:day")
    @UsePipes(new ValidationPipe())
    async translate(@Param() param: FeedTranslateDto) {
        const { language, year, month, day } = param;
        const { data, error } = await this.feedService.getFeeds(language, `${year}-${month}-${day}`);

        if (error) {
            this.logService.create("error", JSON.stringify(error));
            return new HttpException(error.response.data, error.status);
        }
        return data;
    }
}
