export const counterTemplate = document.createElement('template');
counter.innerHTML = `
<style>
    td {
        padding: 10px;
    }
</style>
<div>
    <table>
    	<tr>
    		<td>All tasks</td>
    		<td class="all-tasks"></td>
    	</tr>
    	<tr>
    		<td>Completed tasks</td>
    		<td class="completed-tasks"></td>
    	</tr>
    	<tr>
    		<td>Not completed tasks</td>
    		<td class="not-completed-tasks"></td>
    	</tr>
        
	</table>
</div>    
`