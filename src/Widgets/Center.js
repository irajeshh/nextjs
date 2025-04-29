
//This puts the given child in the center of the screen
//But unlike flutter we cannot put [child], instead we need to pass [children] only!
export function Center({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            {children}
        </div>
    );
}