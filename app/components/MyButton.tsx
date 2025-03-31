export function MyButton({content , actions} : {content? : string; actions : "sign in" | "sign out";variant: "outline" | "ghost";}) {

    return (
        <>
        <button type="submit" className="rounded-2xl m-4 px-4 border border-input bg-black shadow-xs hover:bg-accent hover:text-accent-foreground text-amber-50">{actions}</button>
        </>
    )
}