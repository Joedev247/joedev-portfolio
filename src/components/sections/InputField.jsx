const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="relative">
    <label className="text-gray-300 text-sm mb-2 flex items-center gap-2">
      <Icon className="w-4 h-4 text-orange-500" />
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3  bg-gray-900/50 border border-gray-800/50 text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
    />
  </div>
);

export default InputField;
