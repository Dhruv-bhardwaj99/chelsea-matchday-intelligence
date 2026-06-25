import { Handle, Position } from "@xyflow/react";

export default function PlayerNode({data}){
    return (
        <div className="flex flex-col items-center gap-1">
            <Handle type="target" position={Position.Top} className="opacity-0" />

            <div className="w-12 h-12 rounded-full bg-[#034694] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                {data.number}
            </div>

            <div className="bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded font-medium whitespace-nowrap">
                {data.name}
            </div>

            <Handle type="source" position={Position.Bottom} className="opacity-0" />
        </div>
    )
}