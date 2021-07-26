<?php
namespace App\Core\category;
use App\core\category\category;
use App\Category as AppCategory;
use Illuminate\Contracts\Config\Repository;

class categoryDetails implements category{

    protected $config;
    public function __construct(Repository $config)
    {
        $this->config = $config;
    }

    public function categoryList($id = null){
        if (empty($id)) {
            $category = AppCategory::all();
        } else {
            $category = AppCategory::where('id', $id)->where('status',true)->get();
        }

        if ($category->isEmpty()) {
            return response()->json(['success' => false, 'message' => 'No Data Found','data' => []], 200);
        }

        return response()->json(['success' => true, 'data' => $category]);
    }

    
}
?>
