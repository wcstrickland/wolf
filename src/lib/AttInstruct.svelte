<script>
</script>

<div>
  <div class="flex">
    <div class="flex start">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <div class="flex end" style="margin-left:1em;">
        One Attribute
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="flex start">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <div class="flex end" style="margin-left:1em;">
        Three Attributes
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="flex start">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <div class="flex end" style="margin-left:1em;">
        Four Attributes
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="flex start">
      <input type="checkbox" checked={true} disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
      <input type="checkbox" disabled />
    </div>
    <div class="flex end"style="margin-left:1em;">
      One Attribute
    </div>
  </div>
</div>


<style>
  .flex{
    display: flex;
  }
  .end{
    justify-content: end;
  }
  .start{
    justify-content: start;
  }
</style>