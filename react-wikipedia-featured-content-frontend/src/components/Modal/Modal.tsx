import React from "react";
import Button from "../Button/Button";

interface IModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="modal-box w-11/12 max-w-5xl">
                        {children}
                        <div className="modal-action">
                            <Button styleType={"btn-danger"} onClick={onClose}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
