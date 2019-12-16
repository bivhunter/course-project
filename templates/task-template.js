export const taskTemplate = document.createElement('template');
taskTemplate.innerHTML = `
<style>
	div {
    height: 100%;
}

.left-column{
    float: left;
    width: 80%;

}

.right-column{
    float: right;
    width: 20%;
}

td {
    text-align: center;
    vertical-align: center;
}
table{
    margin: auto;
}

p {
    width: 100%;
    margin: 10px;
    padding: 0;
}
</style>	
<div class="left-column">
    <p></p>
</div>
<div class="right-column">
    <table>
        <tr><td class="done-button-wrapper"></td></tr>
        <tr><td class="delete-button-wrapper"></td></tr>
    </table>
</div>
`