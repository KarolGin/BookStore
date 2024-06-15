// 1. tworzyc context
// 2.stan dla ksiazek
// 3. dodac dla kazdej ksiazki przycisk add to cart
// 4. stworzyc liste w CartButton
// 5. wyswietlic za pomoca map 
import { createContext, useState } from "react";
import { Book } from "../EditBooks/EditBooks"

type BookContextType = {
    books: Book[];
    
};
export const BasketBookContext = createContext<BookContextType>( 
    {} as BookContextType
); 

type Props = {
    children: JSX.Element | JSX.Element
}

export const BasketBookContextProvider = ({children}: Props) => {
    const [books, setBooks] = useState<Book[]>([]);

    
    return (
        <BasketBookContext.Provider
        value={{books,
            
        }}
        >
         {children}         
        </BasketBookContext.Provider>
    )
}

export default BasketBookContext;