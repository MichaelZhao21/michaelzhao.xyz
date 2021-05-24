<template>
    <div class="not-found">
        <p id="cool-404">404</p>
        <h1 id="not-found-text">The path you were looking for could not be found :((</h1>
        <a class="button-link" href="/">Main profile page</a>
        <a class="button-link" href="/blog">Blog home page</a>
    </div>
</template>

<style scoped>
    #cool-404 {
        margin: 0;
        font-size: 20rem;
        font-weight: 300;
        font-family: 'Montserrat';
        color: #333;
        
    }
    #not-found-text {
        margin-top: 0;
        font-size: 3rem;
        font-weight: 500;
        font-family: 'Ubuntu';
        text-align: center;
        color: #ddd;
    }
    .not-found {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #212121;
    }
    .button-link {
        width: fit-content;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 0.5rem;
        
        text-decoration: none;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 300;
        font-family: 'Montserrat';
        color: white;
        background-color: #333;
    }
    .button-link:hover {
        background-color: #444;
    }
    @media only screen and (max-width: 600px) {
        #cool-404 {
            font-size: 10rem;
        }
        #not-found-text {
            font-size: 1.5rem;
        }
        .button-link {
            margin: 0.5rem 0;
            padding: 0.5rem;
            border-radius: 0.25rem;
            font-size: 1.5rem;
        }
    }
</style>