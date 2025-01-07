import React, { useState } from "react";

const MidNav: React.FC = () => {
  const [selectedDua, setSelectedDua] = useState(0);

  const categories = [
    {
      title: "The servant is dependent on his Lord",
      subcategories: [
        {
          title: "The servant is dependent on his Lord #1",
          content:
            "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
          reference: "Surah Al-Fatir 35:15",
        },
        {
          title: "The servant is dependent on his Lord #2",
          content:
            "Prophet (ﷺ) used to say after every compulsory prayer: The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah.",
          reference: "Surah Al-Hijr 15:21",
        },
      ],
    },
    { title: "The reward of freeing of a slave" },
    { title: "The most important thing to ask Allah for" },
    { title: "Ask for paradise & protection from fire" },
    { title: "Dua to remain steadfast on the religion" },
    { title: "Dua of good outcome in all deeds" },
  ];

  return (
    <div className="page-container">
      <aside className="sidebar">
        <div className="logo">Duas Page</div>
        <div className="categories-section">
          <h2>Categories</h2>
          <div className="categories-header">
            <div className="category-card">
              <h3>Dua s Importance</h3>
              <p>Subcategory: {categories.length}</p>
            </div>
          </div>
          <ul className="categories-list">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`category-item ${
                  selectedDua === index ? "active" : ""
                }`}
                onClick={() => setSelectedDua(index)}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="content">
        <div className="search-bar">
          <input type="text" placeholder="Search by Dua Name" />
        </div>
        <div className="dua-details">
          <h3>
            {selectedDua + 1}. {categories[selectedDua]?.title}
          </h3>
          {categories[selectedDua]?.subcategories?.map((sub, index) => (
            <div key={index} className="subcategory">
              <h4>{sub.title}</h4>
              <p>{sub.content}</p>
              <p>
                <strong>Reference:</strong> {sub.reference}
              </p>
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
        .page-container {
          display: flex;
          height: 100vh;
          font-family: Arial, sans-serif;
        }
        .sidebar {
          width: 300px;
          background-color: #f8f9fa;
          border-right: 1px solid #ddd;
          display: flex;
          flex-direction: column;
          padding: 16px;
        }
        .logo {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .categories-section h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .category-card {
          background-color: #d4edda;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 10px;
          text-align: center;
        }
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
          overflow-y: auto;
          max-height: 60%;
        }
        .category-item {
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 5px;
          background-color: #fff;
          transition: all 0.3s ease;
        }
        .category-item:hover,
        .category-item.active {
          background-color: #e9ecef;
        }
        .content {
          flex-grow: 1;
          padding: 20px;
        }
        .search-bar input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .dua-details {
          padding: 10px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .dua-details h3 {
          color: #28a745;
        }
        .subcategory {
          margin-top: 15px;
          padding-top: 10px;
          border-top: 1px solid #ddd;
        }
      `}</style>
    </div>
  );
};

export default MidNav;
