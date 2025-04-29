
//This puts the given child in the center of the screen
//But unlike flutter we cannot put [child], instead we need to pass [children] only!
//so we use child and then use <></> in the UI pages to pass the children via child param
export function Center({ child }) {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            {child}
        </div>
    );
}