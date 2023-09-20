function sortArrayBy2Criteria(data) {
    console.log(data.sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b)).join("\n"))
}