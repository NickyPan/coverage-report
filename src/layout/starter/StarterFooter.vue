<template>
    <footer class="footer">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        Developed by Nicky With 
                        <i class="ni ni-favourite-28" style="color:lightcoral;margin-left:3px;"></i>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link" target="_blank">Based on  Creative Tim</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/NickyPan/coverage-report/blob/master/LICENSE.md"
                               class="nav-link" target="_blank">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'starter-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
.footer hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
