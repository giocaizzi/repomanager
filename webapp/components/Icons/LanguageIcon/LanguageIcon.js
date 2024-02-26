import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';

const languageIcons = {
    "Python": "python.png",
    "JavaScript": "javascript.png",
    "Jupyter Notebook": "jupyter_notebook.png",
    "TeX": "tex.png",
    "Shell": "shell.png",
}

export default function LanguageIcon({ language }) {

    const knownLanguage = language in languageIcons;
    return (
        <>
            {knownLanguage ? <BaseIcon src={"/languages/" + languageIcons[language]} alt={language} /> : language}
        </>
    );
}