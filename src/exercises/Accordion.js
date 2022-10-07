
import React, { useState } from "react";

const Accordion = ({ items }) => {
  // console.log(items);

  const [visibleIndex, setVisibleIndex] = useState(null);

  //titleをクリックしたか検知するための関数
  const onTitleClick = (index) => {
    console.log("title clicked", index);
    setVisibleIndex(index);
  };

  //mapの変数作ったらreturnさせて、それを最終的にコンポーネントの変数にreturnさせる
  //indexの引数もここで渡せば使うことができる
  const renderedItems = items.map((item, index) => {
    //visibleのクラス(Tailwind)を付与する変数を作る。
    //visibleIndex(現在のindexとindex)が一致したら、visibleを付与、そうでなければ空

    const visible = index === visibleIndex ? "visible" : "";

    return (
      <div key={item.title}>
        <div className="accordion w-3/5 border border-gray-200">
          <div
            className="accordion-item bg-white"
            onClick={() => {
              onTitleClick(index);
            }}
          >
            <h2 className="accordion-header flex mb-0 justify-between w-4/5">
              {item.title}
              <svg
                className="h-8 w-8 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </h2>
          </div>
          <div
            id="collapseOne"
            className={"accordion-collapse collapse hidden" + visible}
          >
            <div className={"accordion-body py-4 px-5 text-blue-500" + visible}>
              {item.content}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
