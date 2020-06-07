const xlsx = require("xlsx")

function getExcelData(path, sheetName){
    let wb = xlsx.readFile(path)
    let wsheet = wb.Sheets[sheetName]
    let values = xlsx.utils.sheet_to_json(wsheet)
    values.forEach(data => {
        console.log(data.Username)
    });
}

getExcelData(".././utils/data.xlsx", "Sheet1")