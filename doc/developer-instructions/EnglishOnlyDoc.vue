<template>
    <DocSectionText>
        <p>
            Despite the fact that you can use non-Latin letters when writing in JavaScript, it is not recommended to do so. While there will not be any programming errors, it is strongly discouraged to use any languages other than English. Even if
            you are writing something for yourself, every piece of code has the ability to "live long", and there may come a time when you need to share this code with other developers. For other developers, especially from different countries, it
            will be difficult to understand what is happening in the code. When emphasizing the use of only English, people often think only about keyboard layout. However, one should not forget about abbreviations and the general use of short forms
            for names. They should only be used with commonly accepted words, such as idx, err, evt, xhr, src, and other historically accepted words in the community. In other cases, the use of abbreviations and short forms of words is strongly
            discouraged, as they often lead to confusion, and deciphering them can take a lot of time.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>
            It is also recommended to enable a spell checker in your code editor, which will highlight grammatical errors in words. In many editors it is enabled by default, and for some you may need to install an extension, such as Code Spell
            <a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" target="_blank">Checker for VS Code</a>. Today's spell checkers are smart enough, and most commonly accepted abbreviations and short forms
            of words will not be flagged as errors.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// Bad
const noviKorisnikPozdravnaPoruka = 'Welcome aboard'

const usrInf = { fName: 'Max', lName: 'Mustermann' }

const isAdult = a >= 18

// Good
const newUserWelcomeMessage = 'Welcome aboard'

const userInfo = { firstName: 'Max', lastName: 'Mustermann' }

const isAdult = userAge >= 18
                `
            }
        };
    }
};
</script>
