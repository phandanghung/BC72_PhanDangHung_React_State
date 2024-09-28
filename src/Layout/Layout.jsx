import React, { useState } from 'react';
import './Layout.css';
import { DataGlasses } from '../data/DataGlasses';

export default function Layout() {
  const [glass, setGlass] = useState(DataGlasses);
  const [selectGlass, setSelectGlass] = useState(null);

  const handleSelect = (item) => {
    setSelectGlass(item); // Cập nhật kính mắt đã chọn
  };

  const renderList = () => {
    return glass.map((item) => {
      return (
        <div
          onClick={() => handleSelect(item)}
          key={item.id}
          style={{
            backgroundColor: selectGlass?.id === item.id ? 'red' : 'gray',
          }}
          className="col-2 text-center"
        >
          <h4>{item.name}</h4>
          <img style={{ width: '100px' }} src={item.url} alt={item.name} />
        </div>
      );
    });
  };

  return (
    <div className="layout">
      <h3 style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} className="text-center text-light">
        TRY GLASSES APP ONLINE
      </h3>
      <div className="container mt-5">
        <div className="row pb-5">
        <div className="col-md-6">
            <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model" />
          </div>
          <div className="col-md-6">
            <div className="contain position-relative">
              <img
                style={{ width: '250px' }}
                className="position-absolute"
                src="./glassesImage/model.jpg"
                alt="model"
              />
              {selectGlass && ( 
                <img
                  style={{
                    width: '150px',
                    top: '75px',
                    right: '18%',
                    opacity: '0.8',
                  }}
                  className="position-absolute"
                  src={selectGlass.url}
                  alt={selectGlass.name} 
                />
                
              )}
              {selectGlass && (
                  <div style={{background:'orange',width:'250px',top:'223px',right:'68px'}} className="desc position-absolute">
                  <h3>{selectGlass.name}</h3>
                  <p >{selectGlass.desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="list mt-5">
          <div className="row">{renderList()}</div> 
        </div>
      </div>
    </div>
  );
}
