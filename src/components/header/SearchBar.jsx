const SearchBar = () => {
  return (
    <div>
      <input
        placeholder="Search products..."
        class="w-full h-9 pl-9 pr-4 text-sm bg-background border border-input rounded-md  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
        type="text"
        value=""
      />
    </div>
  );
};
export default SearchBar;
