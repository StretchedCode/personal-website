

function Header(){

    return(
        <div className=" w-full justify-end fixed top-0 border-b-slate-50 border-b-4 bg-white z-10 p-4">
            <div className="flex justify-end gap-5">
                <button onClick={() => {window.open("https://www.linkedin.com/in/ghufran-shahid-a96483241/")}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="h-7 w-7" />
                </button>
                <button onClick={() => {window.open("https://github.com/StretchedCode")}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="h-7 w-7" />
                </button>
            </div>
        </div>
    )
}

export default Header