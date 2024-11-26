import React from "react";
import { MoveRight } from "lucide-react";

const Bio = () => {
    const contactInfo = [
        {
          label: "Office Address:",
          value: "UCSF, 505 Parnassus Ave, Rm M-917, San Francisco, CA 94143",
          link: "https://www.google.com/maps?q=UCSF,+505+Parnassus+Ave,+Rm+M-917,+San+Francisco,+CA+94143",
          type: "map"
        },
        {
          label: "Email:",
          value: "jeremiah.nzewata@ucsf.edu",
          link: "mailto:jennifer.smith@ucsf.edu",
          type: "email"
        },
        {
          label: "Phone:",
          value: "415-476-1234",
          link: "tel:415-476-1234",
          type: "phone"
        },
        {
          label: "LinkedIn:",
          value: "linkedin.com/in/jennifersmith",
          link: "https://linkedin.com/in/jennifersmith",
          type: "linkedin"
        },
        {
          label: "Publications:",
          value: "https://babcockuni.academia.edu/UcheJerryNzenwata",
          link: "https://babcockuni.academia.edu/UcheJerryNzenwata",
          type: "publications"
        }
      ];
    return (
        <div className="p-6 rounded-lg space-y-8 px-[60px]">
            <div className="text-left">
                <h1 className="text-2xl font-bold mb-4">Bio</h1>
                <h2 className="leading-relaxed">
                    Jeremiah Nzewata is a physician-scientist in the Division of Pulmonary and Critical Care Medicine at UCSF. He completed his computer science degree, and fellowship in pulmonary and critical care medicine at Harvard Medical School. Her research focuses on understanding the role of the lung microbiome in health and disease. She has received funding from the National Institutes of Health, American Lung Association, and Cystic Fibrosis Foundation. She is also passionate about medical education and serves as the associate program director for the pulmonary and critical care fellowship.
                </h2>
            </div>

            <div className="text-left">
                <h1 className="text-2xl font-bold mb-4">Hobbies</h1>
                <ul className="flex flex-wrap gap-4">
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Running</li>
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Traveling</li>
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Cooking</li>
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Reading</li>
                </ul>
            </div>

            <div className=" text-white pt-3">
      <div className="">
        <h1 className="text-3xl font-bold mb-7">Contact</h1>
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.type !== 'email' && info.type !== 'phone' ? '_blank' : undefined}
              rel={info.type !== 'email' && info.type !== 'phone' ? 'noopener noreferrer' : undefined}
              className="block group"
            >
              <div className="flex items-start justify-between hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-400">{info.label}</h2>
                  <p className="text-lg">
                    {info.type === 'linkedin' || info.type === 'publications' ? (
                      <span className="text-blue-400 hover:text-blue-300">{info.value}</span>
                    ) : (
                      info.value
                    )}
                  </p>
                </div>
                <MoveRight
                 className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Bio;
