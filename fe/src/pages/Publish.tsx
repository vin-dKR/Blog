import Navbar from "../components/Navbar"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { titleAtom, descriptionAtom, authorAtom } from "../store/atoms/atom";

function Publish() {
    const setTitle = useSetRecoilState(titleAtom);
    const setContent = useSetRecoilState(descriptionAtom);
    const author = useRecoilValue(authorAtom)

    return (
        <div>
            <Navbar author={author} />
            <div className="max-w-4xl mx-auto mt-8 px-4">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full text-5xl font-bold mb-4 p-2 border-none outline-none break-words focus:ring-0 placeholder-gray-300 whitespace-normal overflow-hidden"
                    // style={{ minHeight: '200px' }}
                    // value={title}
                    onChange={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        setTitle(e.target.value)
                    }}
                />
                <textarea
                    placeholder="Tell your story..."
                    className="w-full text-xl mt-4 p-2 border-none outline-none focus:ring-0 placeholder-gray-300 resize-none overflow-hidden"
                    rows={1}
                    style={{ minHeight: '200px' }}
                    // value={content}
                    onChange={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        setContent(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}

export default Publish