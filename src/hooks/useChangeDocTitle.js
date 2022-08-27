const useChangeDocTitle = (title)=>{
    const title_default = process.env.REACT_APP_URL_API
    document.title=title??title_default;
}
export default useChangeDocTitle;