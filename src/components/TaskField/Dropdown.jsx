export default function Dropdown({ items, value, ...props }) {
    return (
        <select
            className="bg-white mt-2 block outline-none rounded-xl placeholder-gray-300 text-sm font-light border-solid px-4 py-2 transition-shadow duration-500 ease-in-out shadow-sm hover:shadow-md"
            defaultValue=""
            { ...props }
        >
            <option className="text-gray-300" value="" disabled>
                -- select an option --
            </option>

            {
                items.map((item) => (
                    <option value={item.value} key={item.value}>
                        {item.label}
                    </option>
                ))
            }

        </select>
    )
}