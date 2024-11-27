const Props = () => {
    return (
        <div className="h-1/3 min-h-[200px]">
            <div className="h-8 bg-gray-100 border-b border-gray-200 px-4 flex items-center">
               <span className="text-sm font-medium text-black">Props</span>
            </div>
            <div className="p-4">
               {/* Props editor will go here */}
               <div className="space-y-2">
                 <div className="text-sm text-gray-200">No props defined</div>
               </div>
            </div>
        </div>
    )
}

export default Props