export const filterTemplate = document.createElement('template');
filterTemplate.innerHTML = `
    <style>
    td {
        outline: blue 1px groove;
    }
</style>
    <div class="wrapper">
        <h2>Filter Tasks</h2>
        <table>
            <tr>
                <td class="all-wrapper"></td>
                <td class="done-wrapper"></td>
                <td class="not-done-wrapper"></td>
            </tr>    
        </table>    
    </div>    
`;
