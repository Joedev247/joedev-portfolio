const ContactInfoCard = ({ Icon, title, content, link }) => (
  <a
    href={link}
    className="group flex items-start gap-4 p-4  bg-gray-900/30 border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300"
  >
    <div className="p-2 rounded-full bg-gray-800/50 group-hover:bg-orange-500/10 transition-colors">
      <Icon className="w-5 h-5 text-orange-500" />
    </div>
    <div>
      <h3 className="text-gray-300 font-medium mb-1 text-sm">{title}</h3>
      <p className="text-gray-400 text-sm">{content}</p>
    </div>
  </a>
);

export default ContactInfoCard;
