<script>
  export let title;
</script>

<div style="margin-left:33%">
  {#if title != ""}
    <h3>{title}</h3>
  {:else}{/if}

  <div style="display:flex;">
    <div style="display:flex;justify-content:flex-start;">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">
        One Attribute
      </div>
    </div>
  </div>

  <div style="display:flex;">
    <div style="display:flex;justify-content:flex-start;">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">
        Three Attributes
      </div>
    </div>
  </div>

  <div style="display:flex;">
    <div style="display:flex;justify-content:flex-start;">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">
        Four Attributes
      </div>
    </div>
  </div>

  <div style="display:flex;">
    <div style="display:flex;justify-content:flex-start;">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
    </div>
    <div style="display:flex;justify-content:flex-end;margin-left:1em;">
      One Attribute
    </div>
  </div>
</div>
