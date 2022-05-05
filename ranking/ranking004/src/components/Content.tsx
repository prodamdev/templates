export default function Content(props) {
    return (
        <div className={`flex flex-col`}>
            {props.children}
        </div>
    )
}