import ReactSwitch from 'react-switch';
import './CategoryFilter.css';
import { Category } from './models/categories';

export interface CategoryFilterProps {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, setCategories }) => {
  const handleChange = (newValue: boolean, category: Category) => {
    const newCategories = categories.filter((c) => c !== category);
    if (newValue) {
      newCategories.push(category);
    }
    setCategories(newCategories);
  };

  return (
    <div id="FilterContainer">
      <div id="ToggleBox">
        <p id="Label" className="easy">
          Easy
        </p>
        <ReactSwitch
          checked={categories.includes('easy')}
          onChange={(checked) => handleChange(checked, 'easy')}
        />
      </div>
      <div id="ToggleBox">
        <p id="Label" className="medium">
          Medium
        </p>
        <ReactSwitch
          checked={categories.includes('medium')}
          onChange={(checked) => handleChange(checked, 'medium')}
        />
      </div>
      <div id="ToggleBox" className="hard">
        <p id="Label">Hard</p>
        <ReactSwitch
          checked={categories.includes('hard')}
          onChange={(checked) => handleChange(checked, 'hard')}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
