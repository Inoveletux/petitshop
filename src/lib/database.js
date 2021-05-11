//Dans un fichier lib/database.js


export const productDatabase = [

    { productCode: 'DBZ', description: 'Dragonball Z Kai - Saga de Boo',   unitPrice: 29.90 },
    { productCode: 'FMA', description: 'Full Metal Alchemist Brotherhood', unitPrice: 19.50 },
    { productCode: 'SKY', description: 'Skyfall',                          unitPrice: 22.50 },
    { productCode: 'OPM', description: 'One Punch Man',                    unitPrice: 25.70 },
    { productCode: 'SWT', description: 'Star Wars épisode V',              unitPrice: 29.90 }
];


export const voucherDatabase = [

    { 'NOEL2020'     : 0.12 },
    { 'ANNIVERSAIRE' : 0.15 },
    { 'SOLDES_ETE'   : 0.25 }
];


export function findProduct(productCode) {
    //Map ou filter pour trouver le bon
    let product = productDatabase.find((e) => e.productCode === productCode )?? false
        return product
    
}

export function findVoucher(voucherCode) {
}