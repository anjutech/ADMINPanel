import { port } from './config/dotenv.js';
import app from './app.js';





// Start server
app.listen(port, () => {
    
    console.log(`Server is running on http://localhost:${port}`);
});


