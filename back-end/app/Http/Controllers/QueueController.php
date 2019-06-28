<?php

namespace App\Http\Controllers;

use App\Queue;
use Illuminate\Http\Request;

class QueueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $queue = Queue::all();
        return response()->json([
            'data' => $queue
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    { }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->queue_key = $request->tk_id + $request->rekruitmen_id;
        $queue = Queue::create($request->all());

        if ($queue) {
            return response()->json([
                'error' => false,
                'message' => "sukses"
            ]);
        } else {
            return response()->json([
                'error' => true,
                'message' => "gagal"
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Queue  $queue
     * @return \Illuminate\Http\Response
     */
    public function show(Queue $queue)
    {
        $queue = Queue::find($queue);

        return response()->json([
            'data' => $queue
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Queue  $queue
     * @return \Illuminate\Http\Response
     */
    public function edit(Queue $queue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Queue  $queue
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Queue $queue)
    {
        $queue = Queue::update($request->all());

        return response()->json([
            'error' => $queue
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Queue  $queue
     * @return \Illuminate\Http\Response
     */
    public function destroy(Queue $queue)
    {
        $queue = Queue::delete($queue);

        return response()->json([
            'message' => $queue
        ]);
    }
}
