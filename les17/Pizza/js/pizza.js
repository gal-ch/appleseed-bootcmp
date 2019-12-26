const Pizza={};

Pizza.start = () =>{
    const newBtn = $('#new');
    const saveBtn =$('#save');
    const loadBtn = $('#load');
    loadBtn.click(Pizza.load);
    saveBtn.click( Pizza.save);
    newBtn.click(Pizza.new);
}