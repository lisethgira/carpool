const env = process.env
const config = {
    db: {
        connectionLimit: 200,
        host: env.DB_HOST || 'bawdkc5uydt2x70ujxbp-mysql.services.clever-cloud.com',
        user: env.DB_USER || 'uhyznnycbl5pbww7',
        password: env.DB_PASSWORD || 'LR4qc07c6LtKiHgjrnE0',
        database: env.DB_NAME || 'bawdkc5uydt2x70ujxbp',
    },
    listenPort:  env.PORT_SERVER || 5000,
    secrectKey: "carpool"
}

export default config