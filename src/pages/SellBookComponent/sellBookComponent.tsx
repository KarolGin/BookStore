import { useContext, useState } from "react";
import { BasketBookContext } from "../BasketBookContext/BasketBookContext";
import { t } from "i18next";
import "./sellBookComponent.scss";
import { CartBook } from "../CartButton/CartButton";

export const SellBookComponent = () => {
    const { books, bookCopies, addToCart, sellBook } = useContext(BasketBookContext);
    const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

    const handleSellClick = (bookId: number) => {
        setSelectedBookId(bookId);
    };

    const confirmSell = () => {
        if (selectedBookId !== null) {
            const selectedBook = books.find(book => book.id === selectedBookId);
            if (selectedBook) {
                sellBook(selectedBookId);
                addToCart(selectedBook);
                setSelectedBookId(null);
            }
        }
    };


    return (
        <>
            <CartBook />
            <div className="sell-container">

                <h1>{t(`listbook`)}</h1>
                <ul className="book-list">
                    {books.map(book => (
                        <li key={book.id} className="book-item">
                            <span>{book.title} - {t(`accessible`)} {bookCopies[book.id]}</span>
                            {bookCopies[book.id] > 0 && (
                                <button onClick={() => handleSellClick(book.id)} className="sell-button">{t(`sell`)}</button>
                            )}
                        </li>
                    ))}
                </ul>

                {selectedBookId !== null && (
                    <div className="modal">
                        <p>{t(`areyousure`)}</p>
                        <div>
                            <button onClick={() => setSelectedBookId(null)} className="reject-button">{t(`no`)}</button>
                            <button onClick={confirmSell} className="confirm-button">{t(`yes`)}</button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};








export default SellBookComponent;