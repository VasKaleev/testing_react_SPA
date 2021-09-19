import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';

const onChange=jest.fn();
describe('search component', ()=>{
    it('render search component',()=>{
      render(
          <Search  value="" onChange={onChange}>
             Find: 
          </Search>
      );  
      expect(screen.getByText(/Find/i)).toBeInTheDocument();
    });
    it('render without children',()=>{
      render(
        <Search  value="" onChange={onChange} />
           
    );  
    expect(screen.getByText(/search/i)).toBeInTheDocument();
    })
    it("renders without placeholder",()=>{
      render(
        <Search  value="" onChange={onChange} />
           
    );  
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
    });
    it("custom plaseholder works correctly",()=>{
      render(
        <Search  value="" onChange={onChange} placeholder='find post'/>
           
    );  
    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
    });
    it("onChange works",()=>{
      render(
        <Search  value="" onChange={onChange}>
           Find: 
        </Search>
    );  
    userEvent.type(screen.getByRole('textbox'),'React');
    expect(onChange).toHaveBeenCalledTimes(5);
    });

it('dinamik styles works',()=> {
  render(<Search value='abc' onChange={onChange} />);
  expect(screen.getByRole('textbox')).toHaveClass('input');
  expect(screen.getByRole('textbox')).toHaveClass('filled');
  expect(screen.getByText('Search')).toHaveClass('label');

  //expect(screen.getByText('Search')).toHaveStyle('display: flex');
  //expect(screen.getByText('Search')).toHaveAttr('display: flex'); 
});    
});  