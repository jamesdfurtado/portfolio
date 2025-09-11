function goToPage(page){
    let url = window.location.href;
    console.log(url)

    url = url + page;
    console.log(url)
    window.location.href = url;
}