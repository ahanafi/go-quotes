import "../components/quote-list.js";
import "../components/category-list.js";
import "../components/searchbar.js";
import ApiDataSource from "../data/api-data-source.js";

const main = () => {
    const navBar = document.querySelector("nav-bar");
    const searchBar = document.querySelector("search-bar");
    const quoteList = document.querySelector("quote-list");
    const categoryList = document.querySelector("category-list");

    const getQuotes = async (keyword) => {
        try {
            const getQuotes = await ApiDataSource.getQuote(keyword);
            renderResult(getQuotes);
        } catch (error) {
            fallbackResult(error);
        }
    }

    const renderResult = (result) => (quoteList.quote = result);
    const renderCategoryResult = (result) => (categoryList.category = result)
    const fallbackResult = (msg) => quoteList.renderError(msg);

    searchBar.keyUpEvent = (e) => {
        if (e.keyCode == 13) {
            getQuotes(searchBar.value);
        }
    };

    navBar.clickEvent = async () => {
        try {
            const getCateogry = await ApiDataSource.getCategories();
            renderCategoryResult(getCateogry)
        } catch (error) {
            fallbackResult(error);
        }
    }
};

export default main;