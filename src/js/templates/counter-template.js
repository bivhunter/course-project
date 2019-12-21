export const counterTemplate = document.createElement('template');
counterTemplate.innerHTML = `
<style>
    td {
        padding: 10px;
        text-align: center;
        vertical-align: middle;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }
    div {
        font-size: 20px;
    }
    
    .all-tasks {
        color: blue;
        font-size: 40px;
    }
    .completed-tasks{
        color: green;
        font-size: 40px;
    }
    .not-completed-tasks {
        color: red;
        font-size: 40px;
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