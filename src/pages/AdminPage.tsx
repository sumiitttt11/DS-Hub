import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  github: string;
  linkedin: string;
  email: string;
  website: string;
}

const AdminPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      name: "Sumit Kumawat",
      role: "Lead Developer",
      github: "sumiitttt11",
      linkedin: "#",
      email: "contact@example.com",
      website: "#"
    },
  ]);

  const [newMember, setNewMember] = useState<TeamMember>({
    name: '',
    role: '',
    github: '',
    linkedin: '',
    email: '',
    website: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.role) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember({ name: '', role: '', github: '', linkedin: '', email: '', website: '' });
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">Admin Panel</h1>
          <p className="text-xl text-gray-400">Manage Team Members</p>
        </motion.div>

        <div className="mb-10 p-6 bg-white/5 rounded-lg">
          <h2 className="text-2xl text-white mb-4">Add New Member</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(newMember).map((key) => (
              <input key={key} type="text" name={key} value={(newMember as any)[key]} onChange={handleChange} placeholder={`Enter ${key}`} className="p-2 bg-gray-800 text-white rounded" />
            ))}
          </div>
          <button onClick={handleAddMember} className="mt-4 px-6 py-2 bg-purple-500 text-white rounded">Add Member</button>
        </div>

        {teamMembers.map((member, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="mb-10">
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/50">
                  <img src={`https://github.com/${member.github}.png`} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                  <p className="text-xl text-purple-400 mb-4">{member.role}</p>
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    {member.github && <a href={`https://github.com/${member.github}`} target="_blank" className="text-gray-400 hover:text-white"><Github className="w-6 h-6" /></a>}
                    {member.linkedin && <a href={member.linkedin} className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>}
                    {member.email && <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-white"><Mail className="w-6 h-6" /></a>}
                    {member.website && <a href={member.website} className="text-gray-400 hover:text-white"><Globe className="w-6 h-6" /></a>}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;