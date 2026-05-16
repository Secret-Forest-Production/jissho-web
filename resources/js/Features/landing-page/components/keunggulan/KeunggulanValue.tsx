import { keunggulanData } from "../../data/keunggulan/keunggulan-link";

import KeunggulanValueItem from "./KeunggulanValueItem";
import type { KeunggulanValueItem as KeunggulanValueItemType } from "./keunggulan.type";

export default function KeunggulanValue() {
    return (
        <div className="flex-1 space-y-8 py-12 lg:pl-12">
            {keunggulanData.values.map(
                (item: KeunggulanValueItemType, index: number) => (
                    <KeunggulanValueItem
                        key={item.title}
                        item={item}
                        index={index}
                    />
                ),
            )}
        </div>
    );
}
