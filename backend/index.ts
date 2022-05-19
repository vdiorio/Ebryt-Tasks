import app from './src/app';

require('dotenv').config();

const { PORT } = process.env;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
