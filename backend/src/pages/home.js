const home = (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server Pegawai</title>
            <style>
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
    				background: radial-gradient(
				        circle at center,
				        #ffffff 0%,
				        #777777 15%,
				        #222222 45%,
				        #000000 100%
				    );
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }

                h1 {
                    margin-bottom: 10px;
                }

                p {
                    color: #666;
                }

                .status {
                    color: green;
                    font-weight: bold;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>Server Pegawai</h1>
                <p>Backend API sedang berjalan.</p>
                <p class="status">● Server Online</p>
            </div>
        </body>
        </html>
    `);
};

export default home;