import pfp from "./pfp.jpeg"

export function About() {
    return (
        <main>
            <div>
                {resources.map(({ header, text, pfp }) => (
                <div>
                    <div>
                        <header>
                            { header }
                        </header>
                        <div>
                            { text }
                        </div>
                    </div>
                    <div>
                        { pfp }
                    </div>
                </div>
                ))}
            </div>
        </main>
    );
}

const resources = [
    {
        header: "Header",
        text: "Text",
        pfp: (
            <img 
            src = {pfp}
            className="block w-full dark:hidden"
            />
        )
    }
]