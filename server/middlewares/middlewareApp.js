// custom middlewares for app experss
const middlewares = {
    json: app.use(express.json()),
    urlencoded: app.use(express.urlencoded({ extended: true })),
    cors: app.use(cors())
}

export default middlewares;
