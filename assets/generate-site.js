var array = require('../script')

// create div for each team member listedd
const generateTeam = () => {
  return `<div class="columns">
  ${teamData
      .filter(({ engineer }) => engineer)
      .map(({ name, job, id, github, email }) => {
        return `
    <section class='column is-one-third'>
        <h3>${name}<span>ID:${id}</span></h3>
        <div>
        <h5>${job}</h5>
        </div>
        <div>
        <p><a href="https://github.com/${github}">${github}</a></p>
        <p><a href="mailto: ${email}">${email}</a></p>
        
        </div>
        </section
    `;
      })
      .join('')}

  ${teamData
      .filter(({ intern }) => intern)
      .map(({ name, job, school, github, email }) => {
        return `
    <section class='column is-one-third'>
        <h3>${name}</h3>
        <div>
        <h5>${job}<span>ID:${school}</span></h5>
        </div>
        <div>
        <p><a href="https://github.com/${github}">${github}</a></p>
        <p><a href="mailto: ${email}">${email}</a></p>
        
        </div>
        </section>
    `;
      })
      .join('')};
    </div>
  `;  
};

// export function to generate entire page
module.exports = userData => {

  return `
    < !DOCTYPE html >
      <html lang="en">

        <head>
          <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Html</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
                    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                      <link rel="stylesheet" href="style.css">
                      </head>

                      <body>
                        <header>
                          <h2> Team Page </h2>
                        </header>
                        <main>
                          ${generateTeam(userData)}
                        </main>
                      </body>
                    </html>
                    `;
};
