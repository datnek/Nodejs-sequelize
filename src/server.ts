import app from "./app/app";
const PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));
}

export default app;


