import React from "react";
import poster from "../Assets/poster.jpg";

const Ahead = () => {
  return (
    <section className="bg-gray-100 py-12" style={{paddingLeft:"10%",paddingRight:"10%"}}>
      <div className="container mx-auto" style={{backgroundColor:"rgb(350, 245, 240)",borderRadius:"15px"}}>
        <p className="text-gray-600 mb-4" style={{paddingLeft:"10px"}}>Built out of frustration</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{paddingLeft:"10px"}}>Meet the Ahead App</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0"> {/* Adjust gap to 0 */}
          <div className="md:col-span-1">
            <img
              src={poster} style={{width:"100%",borderRadius:"30px"}} // Replace with actual image path
              alt="Ahead App"
            />
          </div>
          <div className="md:col-span-1 flex flex-col">
            <p className="text-gray-600 mb-4">
              A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
            </p>
            <p className="text-gray-600">
              Think of it as a pocket cheerleader towards a better, more fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ahead;
