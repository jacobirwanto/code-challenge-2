import useTeam from "../hooks/useTeamMembers";
import teamMembers from "../utils/TeamMembers";
import heroImg4 from "../assets/hero4.png";

function OurTeamDetails() {
  const teamMembersFromHook = useTeam();
  const teamMembersFromUtils = teamMembers.map((member) => ({
    name: member.name,
    description: member.description,
    position: member.position,
    positionAbb: member.positionAbb,
  }));
  const mergedTeamMembers = teamMembersFromHook.map(
    (memberFromHook, index) => ({
      ...memberFromHook,
      name: teamMembersFromUtils[index].name,
      description: teamMembersFromUtils[index].description,
      position: teamMembersFromUtils[index].position,
      positionAbb: teamMembersFromUtils[index].positionAbb,
    })
  );

  return (
    <div className="bg-gray-950">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 lg:px-8 text-white">
          <h1 className="text-xl lg:text-5xl font-bold mb-4 font-maximus">
            Meet the Innovators
          </h1>
          <p className="text-xs lg:text-lg lg:mb-4">
            Passionate Minds Driving the Future of GPU Technology
          </p>
        </div>
        <img src={heroImg4} alt="company banner" className="w-full h-auto" />
      </div>

      <div className="p-8 lg:px-36">
        {mergedTeamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-gray-900 overflow-hidden mt-16 rounded-lg shadow-lg lg:flex lg:items-center ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="lg:w-1/2">
              <img
                className="h-full w-full object-cover object-top lg:h-auto lg:w-full rounded-lg"
                src={member.picture}
                alt={member.name}
              />
            </div>
            <div className="p-4 lg:p-8 lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-500">
                {member.name}
              </h2>
              <p className="text-gray-300 font-light mb-8 lg:mb-16">
                {member.location}
              </p>
              <p className="text-gray-300 font-extrabold italic text-lg lg:text-4xl">
                {member.position}
              </p>
              <p className="text-gray-300 font-light mb-8 lg:mb-32">
                {member.positionAbb}
              </p>
              <p className="text-gray-300">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeamDetails;
